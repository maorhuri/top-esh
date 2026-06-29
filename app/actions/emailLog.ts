"use server";

export interface EmailLogEntry {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: "success" | "failed";
  messageId?: string;
  error?: string;
}

// In-memory log for current session (will be lost on redeploy)
// For persistent storage, you would need Vercel KV, Upstash, or a database
let emailLogs: EmailLogEntry[] = [];

export async function logEmail(entry: Omit<EmailLogEntry, "id" | "timestamp">): Promise<void> {
  const newEntry: EmailLogEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...entry,
  };
  
  emailLogs.unshift(newEntry);
  
  // Keep only last 6 months
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  emailLogs = emailLogs.filter(
    (entry) => new Date(entry.timestamp) > sixMonthsAgo
  );
  
  // Also log to console for Vercel logs
  console.log("📧 Email Log:", JSON.stringify(newEntry, null, 2));
}

export async function getEmailLogs(password: string): Promise<EmailLogEntry[] | { error: string }> {
  if (password !== "ezpointtest123") {
    return { error: "סיסמה שגויה" };
  }
  
  return emailLogs;
}
