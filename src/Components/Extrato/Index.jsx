import React from 'react';
import { Box, Botao } from '../UI/Index';
import { extratoLista }  from '../../info';
import Items from '../Items/Index';

const Extrato = () => {
  return(
    <Box>
      {extratoLista.updates.map(({id, type, from, value, date}) => {
        return(
          <Items key={id} type={type} from={from} value={value} date={date} />
        )
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
}

export default Extrato;
