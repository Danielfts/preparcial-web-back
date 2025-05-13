import BaseTimestampsEntity from 'src/shared/entities/base-timestamps';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Clase } from '../../clase/entities/clase.entity';

@Entity({ name: 'bonos' })
export class Bono extends BaseTimestampsEntity {
  @Column({ type: 'int2' })
  monto: number;
  @Column({ type: 'real' })
  calificacion: number;
  @Column()
  palabraClave: string;

  @ManyToOne(() => Usuario, (profesor) => profesor.bonos)
  profesor: Usuario;
  @OneToMany(() => Clase, (clase) => clase.bonos)
  clases: Clase[];
}
