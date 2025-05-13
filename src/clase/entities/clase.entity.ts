import BaseTimestampsEntity from 'src/shared/entities/base-timestamps';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'clases' })
export class Clase extends BaseTimestampsEntity {
  @Column()
  nombre: string;
  @Column()
  codigo: string;
  @Column({ type: 'int2' })
  numeroCreditos: number;
}
