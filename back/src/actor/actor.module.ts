import { CacheModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorService } from "./actor.service";
import { Actor } from "./actor.entity";
import { ActorController } from "./actor.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Actor]), CacheModule.register()],
  controllers: [ActorController],
  providers: [ActorService],
  exports: [ActorService],
})
export class ActorModule {}
