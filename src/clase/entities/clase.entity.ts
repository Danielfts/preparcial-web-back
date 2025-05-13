import BaseTimestampsEntity from '../../shared/entities/base-timestamps';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'clases' })
export class Clase extends BaseTimestampsEntity {
  @Column()
  nombre: string;
  @Column()
  codigo: string;
  @Column({ type: 'int2' })
  numeroCreditos: number;
  @ManyToOne(() => Usuario, (profesor) => profesor.clases)
  profesor: Usuario;
}
