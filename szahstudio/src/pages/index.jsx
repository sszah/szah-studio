import React from 'react'
import Layout from "../components/layout";
import Button from '../components/button';

export default function index() {
  return (
    <Layout>
        <h1 className='text-3x1 font-bold underline'>hello, world!</h1>
        <Button />
        <Button />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
        <input placeholder='name' />
    </Layout>
  )
}
