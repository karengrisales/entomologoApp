import React from 'react';
import Button from '../Button';
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { colores, size } from '../../theme/theme';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';

const names: string[] = ['Nombre', 'Lugar', 'Detalles', 'Editar'];
const data: object[] = [
  { name: 'Mariposa', location: 'Popayán' },
  { name: 'Mariquita', location: 'Medellín' },
  { name: 'Lombriz', location: 'Bógota' },
  { name: 'Cucarrón', location: 'Cali' },
  { name: 'Grillo', location: 'Cartagena' },
  { name: 'Oruga', location: 'Barranquilla' },
  { name: 'Mariposa', location: 'Popayán' },
  { name: 'Mariquita', location: 'Medellín' },
  { name: 'Lombriz', location: 'Bógota' },
  { name: 'Cucarrón', location: 'Cali' },
  { name: 'Grillo', location: 'Cartagena' },
  { name: 'Oruga', location: 'Barranquilla' },
  { name: 'Mariposa', location: 'Popayán' },
  { name: 'Mariquita', location: 'Medellín' },
  { name: 'Lombriz', location: 'Bógota' },
  { name: 'Cucarrón', location: 'Cali' },
  { name: 'Grillo', location: 'Cartagena' },
  { name: 'Oruga', location: 'Barranquilla' },
];

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const Table = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const checkIndexIsEven = (n: number) => {
    return n % 2 === 0;
  };
  const checkIndexIsLast = (n: number) => {
    return data.length - 1 === n;
  };
  return (
    <DataTable>
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
              <DataTable.Cell style={styles.cell}>
                <Button
                  icon={'eye'}
                  theme={'buttonIcon'}
                  color={colores.primaryPurple}
                  onPress={() => navigation.navigate('Details')}
                />
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                <Button
                  icon={'edit-2'}
                  theme={'buttonIcon'}
                  color={colores.primaryPurple}
                  onPress={() => navigation.navigate('Add')}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </View>
    </DataTable>
  );
};

export default Table;
