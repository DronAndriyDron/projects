import { Role } from '../../authentication/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { File } from '../../files/entities/file.entity';


@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: 'oneTime' })
  password?: string;

  @Column({ nullable: true })
  pinCode?: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: '' })
  addressOne: string;

  @Column({ default: '' })
  addressTwo: string;

  @Column({ default: '' })
  postalCode: string;

  @Column({ default: '' })
  phoneNumber: string;

  @Column({ default: false })
  isOTP: boolean;

  @ManyToOne(() => File)
  @JoinColumn()
  avatarImage: File;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
  })
  updatedAt: Date;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deletedAt: Date;

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      addressOne: this.addressOne,
      addressTwo: this.addressTwo,
      postalCode: this.postalCode,
      phoneNumber: this.phoneNumber,
      isOTP: this.isOTP,
      avatarImage: this.avatarImage,
      roles: this.roles,
      status: this.deletedAt ? 'Suspended' : 'Active',
    };
  }
}
