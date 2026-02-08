import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Modal from "./Modal/Modal";
const Table = ({ users }) => {
    // состояния для сортировки
    const [sort, setSort] = useState({
        column: null,
        direction: null
    });

    // состояни для выбранного пользователя 
    const [selectedUser, setSelectedUser] = useState(null);

    // сортировка пользователей
    const sortedUsers = useMemo(() => {
        if (!sort.column || !sort.direction) {
            return [...users];
        }

        const usersForSorting = [...users];

        usersForSorting.sort((a, b) => {
            const valueA = a[sort.column];
            const valueB = b[sort.column];

            if (typeof valueA === 'string') {
                return sort.direction === 'asc' 
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }

            if (typeof valueA === 'number') {
                return sort.direction === 'asc' 
                    ? valueA - valueB
                    : valueB - valueA;
            }

            return 0;
        });

        return usersForSorting;
    }, [users, sort]);

    // функция для сортировки
    const handleSort = (column) => {
        if (sort.column === column) {
            if (sort.direction === 'asc') {
                setSort({ column, direction: 'desc' });
            } else if (sort.direction === 'desc') {
                setSort({ column: null, direction: null });
            } else {
                setSort({ column, direction: 'asc' });
            }
        } else {
            setSort({ column, direction: 'asc' });
        }
    };

    // функция для открытия модального окна
    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="table-container">
            <table>
                <TableHeader sort={sort} onSort={handleSort} />
                <tbody>
                    {sortedUsers.map(user => (
                        <TableRow 
                            key={user.id} 
                            user={user} 
                            onClick={() => handleRowClick(user)}
                        />
                    ))}
                </tbody>
            </table>
            
            {selectedUser && (
                <Modal 
                    active={true}
                    setActive={() => setSelectedUser(null)}
                    user={selectedUser}
                />
            )}
        </div>
    );
};

export default Table;