import React, { useState, useEffect } from "react";
import { getUsersInfo } from "../../data";
import '../styles/UserInfo.css';
import Table from "./Table";

export default function UserInfo() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getUsersInfo();
                setUsers(data);
            } catch (err) {
                setError('Не удалось загрузить данные');
                console.error('Ошибка при загрузке:', err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUsers();
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (loading) {
        return <div className="loading">Данные загружаются</div>;
    }

    return <Table users={users} />;
}