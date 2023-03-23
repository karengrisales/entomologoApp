import React from 'react';
import Button from '../Button';
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { colores, size } from '../../theme/theme';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { TInsect } from '../../types/types';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

interface TProps {
  header: string[];
  insect: TInsect[];
}

const Table = ({ insect, header }: TProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const checkIndexIsEven = (n: number) => {
    return n % 2 === 0;
  };
  const checkIndexIsLast = (n: number) => {
    return insect.length - 1 === n;
  };
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        {header.map((name: any, index: number) => {
          return (
            <DataTable.Title key={index}>
              <Text style={styles.tableTitle}>{name}</Text>
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      <View style={styles.rowContainer}>
        {insect?.map((dato: TInsect, index: number) => {
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
                  onPress={() => navigation.navigate('Edit', insect[index])}
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
