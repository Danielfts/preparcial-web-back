import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseTimestampsEntity from '../../shared/entities/base-timestamps';

@Entity({ name: 'usuarios' })
export class Usuario extends BaseTimestampsEntity {
  @Column()
  numeroCedula: string;
  @Column()
  nombre: string;
  @Column()
  grupoInvestigacion: string;
  @Column()
  numeroExtension: number;
  @Column()
  rol: 'Profesor' | 'Decana';
  @Column({ name: 'id_jefe' })
  idJefe: bigint;

  @ManyToOne(() => Usuario, (jefe: Usuario) => jefe.empleados)
  @JoinColumn({ name: 'id_jefe' })
  jefe: Usuario;

  @OneToMany(() => Usuario, (empleado: Usuario) => empleado.jefe)
  empleados: Usuario[];
}
