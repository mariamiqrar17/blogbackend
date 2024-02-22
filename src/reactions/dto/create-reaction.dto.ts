import {IsNotEmpty,IsString,MinLength, isNotEmpty, isString,} from "class-validator"
import { Blogs } from "../../schemas/blog.schema";
import { ReactionType } from "../../schemas/reactions.schema";
import { User } from "../../schemas/user.schema";

export class CreateReactionDto {
    @IsNotEmpty()
    @IsString()
    readonly type :ReactionType;


    @IsNotEmpty()
    @IsString()
    readonly blog : Blogs;

    @IsNotEmpty()
    @IsString()
    readonly user : User;
}
