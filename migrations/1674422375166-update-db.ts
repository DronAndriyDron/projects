import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDb1674422375166 implements MigrationInterface {
    name = 'updateDb1674422375166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_dfda472c0af7812401e592b6a61"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_beb5846554bec348f6baf449e83"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "sendEmails"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "lastSeen"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "cityId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "organizationId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "organizationId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "cityId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "countryId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "lastSeen" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "startDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "sendEmails" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_beb5846554bec348f6baf449e83" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_dfda472c0af7812401e592b6a61" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
