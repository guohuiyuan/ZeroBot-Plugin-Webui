export interface PluginModel {
  id: number;
  name: string;
  brief: string;
  usage: string;
  banner: string;
  pluginStatus: boolean;
  responseStatus: boolean;
}

export interface GroupModel {
  group_create_time: number;
  group_id: number;
  group_level: number;
  group_name: string;
  max_member_count: number;
  member_count: number;
}

export interface FriendModel {
  nickname: string;
  remark: string;
  user_id: number;
}

export interface RequestModel {
  requestType: string;
  subType: string;
  comment: string;
  groupId: number;
  groupName: string;
  userId: number;
  nickname: string;
  flag: string;
  selfId: number;
}
