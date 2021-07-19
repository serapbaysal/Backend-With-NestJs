import { ActivityModel } from "../models/activity.model";
import { AuditModel } from "../models/audit.model";
import { InventoryModel } from "../models/inventory.model";
import { TicketTypeModel } from "../models/ticket-type.model";
import { UserModel } from "../models/user.model";


export class TicketCreateDto {
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}