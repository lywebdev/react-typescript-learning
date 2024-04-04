import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to='/users'>Пользователи</Link>
                    <Link to='/todos'>Список дел</Link>

                    {/*<NavLink to='/users'>Пользователи</NavLink>*/}
                    {/*<NavLink to='/todos'>Список дел</NavLink>*/}
                </div>

                <Routes>
                    <Route path={'/users'} element={<UsersPage />}></Route>
                    <Route path={'/todos'} element={<TodosPage />}></Route>
                    <Route path={'/users/:id'} element={<UserItemPage />}></Route>
                    <Route path={'/todos/:id'} element={<TodoItemPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
            // {/*<EventsExample />*/}
            // {/*<Card width='200px' height='200px' onClick={(num: number) => console.log('click', num)} variant={CardVariant.outlined}>*/}
            // {/*    <button>Кнопка</button>*/}
            // {/*</Card>*/}
    );
}

export default App;
