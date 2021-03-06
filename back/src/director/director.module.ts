import { CacheModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DirectorService } from "./director.service";
import { Director } from "./director.entity";
import { DirectorController } from "./director.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Director]), CacheModule.register()],
  controllers: [DirectorController],
  providers: [DirectorService],
  exports: [DirectorService],
})
export class DirectorModule {}
