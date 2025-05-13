import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

class BaseTimestampsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}

export default BaseTimestampsEntity;
