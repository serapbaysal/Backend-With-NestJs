import { ActivityTypeModel } from "./activity-type.model";
import { AuditModel } from "./audit.model";

export class ActivityModel {
    id: string;
    name: string;
    audit: AuditModel;
    type: ActivityTypeModel;
}