import React, { Component } from 'react'

export default function Button({ text }) {

    return (
      <div style={{
        backgroundColor: '#333333',
        height: 45,
        width: 160,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
        borderRadius: 2
      }}>
        <p style={{ textAlign: 'center', paddingTop: 12, fontWeight: 300 }}>{text}</p>
      </div>
    )
  }
//}
