import { prop, getModelForClass } from "@typegoose/typegoose";

class Post {
    @prop({type: () => String})
    public title?: String;
    @prop({type: () => String})
    public description: String;
    @prop({type: () => String})
    public author: String;
    @prop({type: () => String})
    public content: String;
 
}

export const PostModel = getModelForClass(Post);

