import React from "react";
import Arrow from "../Icon/Arrow";
import '../styles/UserInfo.css';

const TableHeader = ({ sort, onSort }) => {
    // функция для отображения стрелки
    const showArrow = (column) => {
        if (sort.column === column) {
            if (sort.direction === 'asc') {
                return <Arrow direction="asc" />;
            } else if (sort.direction === 'desc') {
                return <Arrow direction="desc" />;
            }
        }
        return null;
    };

    return (
        <thead>
            <tr>
                <th onClick={() => onSort('lastName')}>
                    Фамилия {showArrow('lastName')}
                </th>
                <th onClick={() => onSort('firstName')}>
                    Имя {showArrow('firstName')}
                </th>
                <th onClick={() => onSort('maidenName')}>
                    Отчество {showArrow('maidenName')}
                </th>
                <th onClick={() => onSort('age')}>
                    Возраст {showArrow('age')}
                </th>
                <th onClick={() => onSort('gender')}>
                    Пол {showArrow('gender')}
                </th>
                <th onClick={() => onSort('phone')}>
                    Номер телефона {showArrow('phone')}
                </th>
                <th>Email</th>
                <th>Страна</th>
                <th>Город</th>
            </tr>
        </thead>
    );
};

export default TableHeader;