// Core React Import
import React, { useState, useEffect } from "react";

// Routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// State Management (Redux Toolkit style — hooks preferred)
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store"; // your configureStore file

// UI Components — MUI
// @material-ui → @mui/material
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Icons
import { FaReact } from "react-icons/fa";

// Forms management
import { useForm } from "react-hook-form";

// Data fetching
import axios from "axios";

// Environment Variables
// For manual setups: many use a simple config.js or .env with manual loading
// (Vite uses import.meta.env, but skipping that here)
import { API_URL } from "./config"; // your config.js exporting const API_URL = ...

// CSS-in-JS (styled-components — still solid & easy to teach)
// (Tailwind is more popular now, but requires extra setup — keep this for minimal)
import styled from "styled-components";
