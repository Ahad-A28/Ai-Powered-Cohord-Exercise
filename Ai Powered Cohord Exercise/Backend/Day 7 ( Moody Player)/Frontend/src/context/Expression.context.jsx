import React, { createContext, useState } from 'react'

const expressionContex = createContext();
const ExpressionContext = (props) => {

const [expression, setExpression] = useState('');

  return (
    <>
        <expressionContex.Provider  value={{ expression, setExpression }}>
            {props.children}
        </expressionContex.Provider>
    </>
  )
}

export { ExpressionContext, expressionContex };