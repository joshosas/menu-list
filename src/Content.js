import React, { useState } from 'react';
import ItemList from './ItemList';


const Content = ({ items, handleCheck, handleDelete }) => {


  return (
    <main>
         {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            
            ) : (
                <p style={{margiTop: '2rem'}}>Your list is empty</p>
            )}
    </main>
  )
}

export default Content
