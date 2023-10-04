import React from "react";
import {useNavigation} from '@react-navigation/native'
import { Text,TouchableOpacity } from "react-native";

import {Container, AcessoGrafico, TextLink} from './styles';


export default function Home(){
  const navigation = useNavigation();
  return(
    <Container>
        <AcessoGrafico onPress={() => {navigation.navigate
          ('MaiorEstoque')}}><TextLink>Produto com maior estoque</TextLink>
          </AcessoGrafico>

          <AcessoGrafico onPress={() => {navigation.navigate
          ('MenorEstoque')}}><TextLink>Produto com menor estoque</TextLink>
          </AcessoGrafico>
    </Container>
  )

}

