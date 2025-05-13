import BaseTimestampsEntity from 'src/shared/entities/base-timestamps';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'bonos' })
export class Bono extends BaseTimestampsEntity {
  @Column({ type: 'int2' })
  monto: number;
  @Column({ type: 'real' })
  calificacion: number;
  @Column()
  palabraClave: string;
}
