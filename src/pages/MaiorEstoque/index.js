import React, { useCallback, useState } from 'react';
//import { Text } from "react-native";
import {useFocusEffect} from '@react-navigation/native';

import {PieChart} from 'react-native-svg-charts';
import { FlatList, Text as Text2} from 'react-native';

import {Text} from 'react-native-svg';

import api from '../../config/configApi';
import { Container } from "../MenorEstoque/styles";



export default function MaiorEstoque(){

  const [data, setData] = useState([]);

  const getProdutos = async () => {
    const response = await api.get('/grafico-maior-estoque');
    setData(response.data.produtos);
}

const pieData = data.map((produto) => ({
  value: produto.quantidade,
  key: produto.id,
  svg: {
      fill: '#007281'
  }
}));

const Label = ({ slices }) => {
  return slices.map((slice) => {
      const { pieCentroid, data } = slice;

      return(
          <Text
          key={data.key}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="#f2b705"
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={16}
          >
              {data.key}
          </Text>
      )
  })
}

  useFocusEffect(
    useCallback(() => {
        getProdutos();
    }, [])
);

  return(
    <Container>
        <PieChart style={{height: 300}} data={pieData}>
                <Label />
        </PieChart>

        <FlatList 
                data={data}
                renderItem={({item}) => (
                    <>
                        <Text2>
                            {item.id} - {item.nome} - {item.quantidade}
                        </Text2>
                    </>
                )} keyExtractor={produto => String(produto.id)}
            />
            
    </Container>
  )

}

