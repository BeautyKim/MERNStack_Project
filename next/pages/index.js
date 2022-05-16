import { Layout, Home } from '@/components'
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function HomePage() {
  
return (
  <Layout>
    <Home/>
  </Layout>
)
}