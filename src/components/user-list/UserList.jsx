import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const theme = useTheme();

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch users. Please try again.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 4, px: 2 }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                    color: "primary.main",
                }}
            >
                User List
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    overflowX: "auto",
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Table sx={{ minWidth: 600 }} aria-label="responsive user table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "primary.main" }}>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Username</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} sx={{
                                "&:hover": {
                                    backgroundColor: theme.palette.hoverColor,
                                }
                            }}
                            >
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}