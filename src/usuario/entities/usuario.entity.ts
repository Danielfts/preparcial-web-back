import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import BaseTimestampsEntity from '../../shared/entities/base-timestamps';

enum UserType {
  PROFESOR = 'Profesor',
  DECANA = 'Decana',
}

@Entity({ name: 'usuarios' })
export class Usuario extends BaseTimestampsEntity {
  @Column({ type: 'int2' })
  numeroCedula: number;
  @Column()
  nombre: string;
  @Column()
  grupoInvestigacion: string;
  @Column({ type: 'int2' })
  numeroExtension: number;
  @Column({ type: 'enum', enum: UserType })
  rol: UserType;
  @Column({ name: 'id_jefe' })
  idJefe: bigint;

  @ManyToOne(() => Usuario, (jefe: Usuario) => jefe.empleados)
  @JoinColumn({ name: 'id_jefe' })
  jefe: Usuario;

  @OneToMany(() => Usuario, (empleado: Usuario) => empleado.jefe)
  empleados: Usuario[];
}
