import React from 'react';
import Button from '../Button';
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { colores, size } from '../../theme/theme';
import { styles } from './styles';

const names: string[] = ['Nombre', 'Ubicación', 'Acciones'];
const data: object[] = [
  { name: 'Mariposa', location: 'Popayán' },
  { name: 'Mariquita', location: 'Medellín' },
  { name: 'Lombriz', location: 'Bógota' },
  { name: 'Cucarrón', location: 'Cali' },
  { name: 'Grillo', location: 'Cartagena' },
  { name: 'Oruga', location: 'Barranquilla' },
];

const Table = () => {
  const checkIndexIsEven = (n: number) => {
    return n % 2 === 0;
  };
  const checkIndexIsLast = (n: number) => {
    return data.length - 1 === n;
  };
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        {names.map((name: any, index: number) => {
          return (
            <DataTable.Title key={index}>
              <Text style={styles.tableTitle}>{name}</Text>
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      <View style={styles.rowContainer}>
        {data?.map((dato: any, index: number) => {
          return (
            <DataTable.Row
              key={index}
              style={[
                {
                  borderBottomEndRadius: checkIndexIsLast(index)
                    ? size.borderRadius
                    : size.borderZero,
                  borderBottomStartRadius: checkIndexIsLast(index)
                    ? size.borderRadius
                    : size.borderZero,
                  backgroundColor: checkIndexIsEven(index)
                    ? colores.white
                    : colores.primaryIndigo,
                },
              ]}>
              <DataTable.Cell>{dato.name}</DataTable.Cell>
              <DataTable.Cell>{dato.location}</DataTable.Cell>
              <DataTable.Cell>
                <View style={styles.containerButtons}>
                  <Button
                    icon={'eye'}
                    theme={'buttonIcon'}
                    color={colores.primaryPurple}
                  />
                  <Button
                    icon={'edit-2'}
                    theme={'buttonIcon'}
                    color={colores.primaryPurple}
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </View>
    </DataTable>
  );
};

export default Table;
