import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1683118618756 implements MigrationInterface {
    name = 'Auto1683118618756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photographers" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "phone" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, CONSTRAINT "PK_9ecef0afe25ec4afcb5216e7f45" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photosessions" ("id" SERIAL NOT NULL, "place" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "peopleAmount" integer NOT NULL, "clientId" integer, "photographerId" integer, CONSTRAINT "PK_aba67b5a90bed67348564df64d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "phone" character varying NOT NULL, "mail" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photosessions" ADD CONSTRAINT "FK_20ff15e12e567281c40dcec8fa5" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photosessions" ADD CONSTRAINT "FK_4c5dc8aa9a486c4a3514997579e" FOREIGN KEY ("photographerId") REFERENCES "photographers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photosessions" DROP CONSTRAINT "FK_4c5dc8aa9a486c4a3514997579e"`);
        await queryRunner.query(`ALTER TABLE "photosessions" DROP CONSTRAINT "FK_20ff15e12e567281c40dcec8fa5"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "photosessions"`);
        await queryRunner.query(`DROP TABLE "photographers"`);
    }

}
