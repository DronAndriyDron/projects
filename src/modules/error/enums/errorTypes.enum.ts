export enum ErrorTypes {
  BUILDING_NOT_FOUND = 'BLDG1',
  BUILDING_LEVEL_NOT_FOUND = 'BLDG2',
  BUILDING_ROOM_NOT_FOUND = 'BLDG3',
  BUILDING_IS_NOT_PART_OF_PROJECT = 'BLDG4',
  BUILDING_LEVEL_IS_NOT_PART_OF_BUILDING = 'BLDG5',
  BUILDING_ROOM_IS_NOT_PART_OF_BUILDING = 'BLDG6',
  UNABLE_TO_DELETE_BUILDING = 'BLDG7',
  UNABLE_TO_DELETE_BUILDING_FK_CONSTRAINT = 'BLDG8',
  UNABLE_TO_DELETE_BUILDING_LEVEL = 'BLDG9',
  UNABLE_TO_DELETE_BUILDING_LEVEL_FK_CONSTRAINT = 'BLDG10',
  UNABLE_TO_DELETE_BUILDING_ROOM = 'BLDG11',
  UNABLE_TO_DELETE_BUILDING_ROOM_FK_CONSTRAINT = 'BLDG12',
  PROJECT_NOT_FOUND = 'PROJ1',
  PROJECT_CATEGORY_NOT_FOUND = 'PROJ2',
  PROJECT_ID_NOT_SET = 'PROJ3',
  PROJECT_NEEDS_START_DATE_SET = 'PROJ4',
  INVALID_PROJECT_ID = 'PROJ5',
  YOU_CAN_ACTIVATE_ONLY_PROJECTS_IN_DRAFT_STATE = 'PROJ6',
  YOU_CAN_ARCHIVE_ONLY_PROJECTS_IN_ACTIVE_STATE = 'PROJ7',
  UNABLE_TO_DELETE_PROJECT = 'PROJ8',
  UNABLE_TO_DELETE_PROJECT_FK_CONSTRAINT = 'PROJ9',
  STANDARD_PROJECT_CATEGORY_EXISTS = 'PROJ10',
  YOU_CAN_UNARCHIVE_ONLY_PROJECTS_IN_ARCHIVED_STATE = 'PROJ11',
  ARCHIVED_PROJECT = 'PROJ12',
  USER_NOT_FOUND = 'USER1',
  USER_MUST_BE_PART_OF_ORGANIZATION = 'USER2',
  USER_DOES_NOT_HAVE_A_VALID_ROLE = 'USER3',
  USER_TO_ASSIGN_NOT_FOUND = 'USER4',
  USER_TO_ASIGN_IS_NOT_PART_OF_AN_ORGANIZATION = 'USER5',
  INITIATOR_USER_NOT_FOUND = 'USER6',
  UNABLE_TO_DELETE_USER = 'USER7',
  UNABLE_TO_DELETE_USER_FK_CONSTRAINT = 'USER8',
  USER_NOT_FOUND_IN_PROJECT = 'USER9',
  USER_ALREADY_ACTIVE_IN_CHAT = 'USER10',
  USER_NOT_ACTIVE_IN_CHAT = 'USER11',
  USER_NOT_IN_ORGANIZATION = 'USER12',
  USER_CANNOT_BE_ACTIVATED = 'USER13',
  USER_TO_UPDATE_HAS_HIGHER_CLEARANCE = 'USER14',
  USER_TO_DEACTIVATE_HAS_OPEN_TICKETS = 'USER15',
  USER_TO_DEACTIVATE_HAS_OPEN_PROCUREMENTS = 'USER16',
  USER_TO_DEACTIVATE_HAS_UNIQUE_ROLE_IN_PROJECT = 'USER17',
  SOME_OF_THIS_USERS_NOT_EXIST = 'USER18',
  EQUIPMENT_NOT_FOUND = 'EQUIP1',
  EQUIPMENT_CATEGORY_GROUP_NOT_FOUND = 'EQUIP2',
  EQUIPMENT_MODEL_NOT_FOUND = 'EQUIP3',
  EQUIPMENT_MANUFACTURER_NOT_FOUND = 'EQUIP4',
  SOURCE_EQUIPMENT_NOT_FOUND = 'EQUIP5',
  UNABLE_TO_DELETE_EQUIPMENT = 'EQUIP6',
  UNABLE_TO_DELETE_EQUIPMENT_FK_CONSTRAINT = 'EQUIP7',
  UNABLE_TO_DELETE_EQUIPMENT_NOT_DELETABLE = 'EQUIP8',
  UNABLE_TO_DELETE_EQUIPMENT_READ_ONLY = 'EQUIP9',
  EQUIPMENT_IS_READ_ONLY = 'EQUIP10',
  EQUIPMENT_CATEGORY_NOT_FOUND = 'EQUIP11',
  BOTH_EQUIPMENTS_MUST_BE_IN_SAME_PROJECT = 'EQUIP12',
  EQUIPMENT_UPDATE_FAILED_PROJECT_IS_ARCHIVED = 'EQUIP13',
  EQUIPMENT_CAN_ONLY_BE_DISABLED_IF_ACTIVE = 'EQUIP14',
  EQUIPMENT_CAN_ONLY_BE_ENABLED_IF_DISABLED_OR_ARCHIVED = 'EQUIP15',
  EQUIPMENT_STATUS_CHANGE_ROUTING_ERROR = 'EQUIP16',
  UPDATE_FAILED_EQUIPMENT_IS_DISABLED_OR_ARCHIVED = 'EQUIP17',
  ORGANIZATION_NOT_FOUND = 'ORGN1',
  INVALID_ORGANIZATION_TYPE = 'ORGN2',
  UNABLE_TO_DELETE_ORGANIZATION = 'ORGN3',
  UNABLE_TO_DELETE_ORGANIZATION_FK_CONSTRAINT = 'ORGN4',
  PARENT_ORGANIZATION_TYPE_MUST_BE_PROVIDER = 'ORGN5',
  UNABLE_TO_DELETE_ORGANIZATION_BEFORE_USERS_ARE_ACTIVE = 'ORGN6',
  DAILYCHECK_PROCEDURE_NOT_FOUND = 'DCPR1',
  YOU_NEED_TO_SET_EITHER_EQUIPMENT_OR_EQUIPMENT_CATEGORY_GROUP_FOR_DAILYCHECK_PROCEDURE = 'DCPR2',
  DAILYCHECK_GROUP_NOT_FOUND = 'DCGRP1',
  DAILYCHECK_GROUP_EXISTS = 'DCGRP2',
  DAILYCHECK_OPERATION_NOT_FOUND = 'DCOP1',
  DAILYCHECK_NOT_FOUND = 'PMPDCE1',
  INVALID_OPERATION_ID = 'PMPDCE2',
  INVALID_LABEL_ID = 'PMPDCE3',
  INVALID_PARAMETER_ID = 'PMPDCE4',
  DC_EVENT_NOT_FOUND = 'PMPDCE5',
  YOU_NEDD_TO_SET_EITHER_A_LABEL_OR_A_PARAMETER = 'PMPDCE6',
  INVALID_EVENT_ID = 'PMPDCE7',
  DC_NOT_FOUND = 'PMPDCE8',
  YOU_CAN_CREATE_DC_ONLY_FOR_ACTIVE_PROJECT = 'PMPDCE9',
  THERE_IS_ALREADY_ANOTHER_DC_ACTIVE_FOR_THIS_PROJECT = 'PMPDCE10',
  PMP_EVENT_NOT_FOUND = 'PMPE1',
  UNIT_NOT_FOUND = 'UNIT1',
  UNABLE_TO_DELETE_UNIT = 'UNIT2',
  MAINTENANCE_OPERATION_NOT_FOUND = 'MTNC1',
  MAINTENANCE_PROCEDURE_NOT_FOUND = 'MTNC2',
  INVALID_MAINTENANCE_PROCEDURE_ID = 'MTNC3',
  YOU_CAN_DISABLE_MAINTENANCE_PROCEDURES_ONLY_IN_ACTIVE_PRJ = 'MTNC4',
  YOU_CAN_ENABLE_MAINTENANCE_PROCEDURES_ONLY_IN_ACTIVE_PRJ = 'MTNC5',
  MAINTENANCE_PROCEDURE_UPDATE_FAILED_EQUIPMENT_IS_ARCHIVED = 'MTNC6',
  MAINTENANCE_PROCEDURE_UPDATE_FAILED_PROJECT_IS_ARCHIVED = 'MTNC7',
  MAINTENANCE_PROCEDURE_UPDATE_FAILED_EQUIPMENT_AND_PROJECT_ARE_ACTIVE = 'MTNC8',
  MAINTENANCE_PROCEDURE_UPDATE_FAILED_EQUIPMENT_AND_PROJECT_IS_DISABLED = 'MTNC9',
  SUBCONTRACTOR_NOT_FOUND = 'SCTR1',
  UNABLE_TO_DELETE_SUBCONTRACTOR = 'SCTR2',
  UNABLE_TO_DELETE_SUBCONTRACTOR_FK_CONSTRAINT = 'SCTR3',
  CHAT_NOT_FOUND = 'CHAT1',
  CHAT_DOES_NOT_EXIST_OR_USER_IS_NOT_A_PARTICIPANT = 'CHAT2',
  INTERNAL_CHAT_IS_ONY_FOR_PROVIDER_USERS = 'CHAT3',
  RESTRICTED_FROM_EXTERNAL_CHAT = 'CHAT4',
  YOU_NEED_TO_HAVE_AT_LEAST_ONE_USER_FROM_THE_RECIPIENT_ORG_IN_CHAT = 'CHAT5',
  CHAT_MESSAGE_NOT_FOUND = 'CHAT6',
  CHAT_MESSAGE_AUTH_USER_NOT_OWNER_OF_MESSAGE = 'CHAT7',
  CHAT_IS_READ_ONLY = 'CHAT8',
  STANDARD_CATEGORY_GROUP_NOT_FOUND = 'SECG1',
  STANDARD_CATEGORY_GROUP_EXISTS = 'SECG2',
  STANDARD_CATEGORY_NOT_FOUND = 'SECG3',
  STANDARD_CATEGORY_EXISTS = 'SECG4',
  STANDARD_PROCEDURE_NOT_FOUND = 'SECG5',
  STANDARD_OPERATION_NOT_FOUND = 'SECG6',
  INVALID_FILE_SIZE = 'FILE1',
  THUMBNAIL_NOT_SUPPORTED_FOR_FILE_TYPE = 'FILE2',
  FILE_NOT_FOUND = 'FILE3',
  INVALID_DATES = 'DATE1',
  COULD_NOT_SEND_EMAIL = 'MAIL1',
  EMAIL_IN_USE = 'MAIL2',
  YOU_CAN_ADD_LABELS_ONLY_TO_VISUAL_OPERATION = 'DCOL1',
  YOU_CAN_ADD_PARAMETERS_ONLY_TO_PARAMETER_OPERATION = 'DCOL2',
  TICKET_NOT_FOUND = 'TICKET1',
  TICKET_UPDATE_NEED_TO_SPECIFY_DUE_DATE_IF_CHANGING_PRIORITY = 'TICKET2',
  TICKET_RECIPIENT_MUST_BE_SET = 'TICKET3',
  TICKET_INVALID_ORGANIZATION_TYPE = 'TICKET4',
  TICKET_STATUS_CHANGE_INVALID = 'TICKET5',
  PROCUREMENT_NOT_FOUND = 'PRCMNT1',
  PROCUREMENT_INVALID_ORGANIZATION_TYPE = 'PRCMNT2',
  WORK_ORDER_NOT_FOUND = 'WRKORD1',
  PROJECT_BOARD_DOES_NOT_EXIST = 'PROJB1',
  PROJECT_BOARD_REMINDER_DATE_MUST_BE_BEFORE_START_DATE = 'PROJB2',
  PROJECT_BOARD_MUST_RECEIVE_BOTH_START_AND_END_DATES = 'PROJB3',
  PROJECT_BOARD_START_DATE_MUST_BE_BEFORE_END_DATE = 'PROJB4',
  UNABLE_TO_DELETE_PROJECT_BOARD = 'PROJB5',
  INVENTORY_ITEM_NOT_FOUND = 'INVTRY1',
  INVENTORY_ITEM_DELETE_ERROR = 'INVTRY2',
  INVENTORY_INVALID_QUANTITY = 'INVTRY3',
  INVENTORY_USER_UNAUTHORIZED_TO_MANAGE_TOOLS = 'INVTRY4',
  COUNTRY_NOT_FOUND = 'CTRY1',
  WARRANTY_ITEM_NOT_FOUND = 'WARRANTY1',
  WARRANTY_ITEM_DELETE_ERROR = 'WARRANTY2',
  UNABLE_TO_SUBMIT_WARRANTY_DUEDATE = 'WARRANTY3',
  WARRANTY_STATUS_CHANGE_ROUTING_ERROR = 'WARRANTY4',
  WARRANTY_DUEDATE_CANT_CHANGE = 'WARRANTY5',
  WARRANTY_NOTE_NOT_FOUND = 'WARRANTY_NOTE_1',
  WARRANTY_NOTE_UNABLE_TO_DELETE = 'WARRANTY_NOTE_2',
  WARRANTY_LOCATION_NOT_FOUND = 'WARRANTY_LOCATION_1',
  WARRANTY_LOCATION_DELETE_ERROR = 'WARRANTY_LOCATION_2',
  TICKET_STATUS_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'TICKET_STATUS_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  PROJECTINFO_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'PROJECTINFO_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  WARRANTY_TRACKER_CATEGORIES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'WARRANTY_TRACKER_CATEGORIES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  WARRANTY_TRACKER_STATUSES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'WARRANTY_TRACKER_STATUSES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  REPORT_CONTENT_SECTIONS_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'REPORT_CONTENT_SECTIONS_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  PROCUREMENT_STATUSES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE = 'PROCUREMENT_STATUSES_ARRAY_CONTAINS_NOT_ALLOWED_VALUE',
  INVALID_FILE_TYPE = 'INVALID_FILE_TYPE',
  DAILYCHECK_GROUP_IS_NOT_PART_OF_PROJECT = 'DAILYCHECK_GROUP_IS_NOT_PART_OF_PROJECT',
  EQUIPMENT_CATEGORY_GROUP_IS_NOT_PART_OF_PROJECT = 'EQUIPMENT_CATEGORY_GROUP_IS_NOT_PART_OF_PROJECT',
  EQUIPMENT_CATEGORY_IS_NOT_PART_OF_PROJECT = 'EQUIPMENT_CATEGORY_IS_NOT_PART_OF_PROJECT',
  EQUIPMENT_IS_NOT_PART_OF_PROJECT = 'EQUIPMENT_IS_NOT_PART_OF_PROJECT',
  COMMENT_IS_REQUIRED = 'COMMENT_IS_REQUIRED',
  EXCEL_NO_SUITABLE_ORGANIZATIONS_FOUND = 'EXCEL_NO_SUITABLE_ORGANIZATIONS_FOUND',
}
