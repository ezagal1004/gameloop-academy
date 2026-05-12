import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { parentName, parentEmail, studentName, studentAge, message } = body;

  // 1. Refresh the Zoho access token
  const tokenRes = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id:     process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type:    'refresh_token',
    }),
  });
  const tokenData = await tokenRes.json();
  const access_token = tokenData.access_token;

  if (!access_token) {
    return NextResponse.json({ success: false, error: 'Failed to authenticate with Zoho' }, { status: 500 });
  }

  // 2. Create Lead in Zoho CRM
  await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [{
        Last_Name:   parentName,
        Email:       parentEmail,
        Description: `Student: ${studentName}, Age: ${studentAge}. ${message || ''}`,
        Lead_Source: 'Website',
      }],
    }),
  });

  // 3. Create Contact in Zoho Desk
  const contactRes = await fetch('https://desk.zoho.com/api/v1/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${access_token}`,
      'Content-Type': 'application/json',
      orgId: process.env.ZOHO_DESK_ORG_ID!,
    },
    body: JSON.stringify({
      lastName: parentName,
      email:    parentEmail,
    }),
  });
  const contactData = await contactRes.json();
  const contactId = contactData.id;

  // 4. Create Ticket in Zoho Desk
  await fetch('https://desk.zoho.com/api/v1/tickets', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${access_token}`,
      'Content-Type': 'application/json',
      orgId: process.env.ZOHO_DESK_ORG_ID!,
    },
    body: JSON.stringify({
      subject:      `Free Trial Request — ${studentName}`,
      description:  `Parent: ${parentName} (${parentEmail})\nStudent: ${studentName}, Age: ${studentAge}\n\n${message || ''}`,
      contactId:    contactId,
      departmentId: process.env.ZOHO_DESK_DEPARTMENT_ID!,
    }),
  });

  return NextResponse.json({ success: true });
}