export enum Role {
  ADMIN = "ADMIN",
  ORGANIZER = "ORGANIZER",
  SELLER = "SELLER",
  VERIFIER = "VERIFIER",
  GUEST = "GUEST",
}

export enum TicketStatus {
  VALID = "VALID",
  USED = "USED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export enum SaleStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserTenant {
  userId: string;
  tenantId: string;
  role: Role;
}

export interface Event {
  id: string;
  name: string;
  description: string | null;
  date: Date;
  venue: string;
  imageUrl: string | null;
  isPublished: boolean;
  tenantId: string;
  creatorId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TicketType {
  id: string;
  name: string;
  description: string | null;
  price: number;
  quantity: number;
  sold: number;
  eventId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ticket {
  id: string;
  code: string;
  status: TicketStatus;
  checkedAt: Date | null;
  checkedBy: string | null;
  ticketTypeId: string;
  saleId: string | null;
  createdAt: Date;
}

export interface Sale {
  id: string;
  total: number;
  status: SaleStatus;
  customerEmail: string | null;
  customerName: string | null;
  paymentReference: string | null;
  guestToken: string | null;
  eventId: string;
  sellerId: string | null;
  createdAt: Date;
  updatedAt: Date;
}