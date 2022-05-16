import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../styles/style/table.module.css'
import Link from 'next/link'

export default function GetBoard({columns, data, colspan}){
    return (
      <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={4}><h1>게시글 목록</h1></th>
            </tr>
        </thead>
        <tbody>
              <tr>
                  {columns.map((column, index) => (
                        <td key={index} >{column}</td>
                  ))}
                </tr>
                { data.length == 0  ?<tr >
                                      <td colSpan={6} >데이터가 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr key={user.userid} >
                  <td >
                    <Link href={{pathname:`/user/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                      <a>{user.userid}</a>
                    </Link>
                  </td>
                  <td >{user.name}</td>
                  <td >{user.email}</td>
                  <td >{user.phone}</td>
                  <td >{user.birth}</td>
                  <td >{user.address}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
    );
}