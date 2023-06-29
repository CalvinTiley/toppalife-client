import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Authentication } from "./contexts/Authentication.tsx";
import { App } from "./App.tsx";
import "./scss/entry.scss";

const queryClient = new QueryClient();

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Authentication>
                        <App />
                    </Authentication>
                </BrowserRouter>
            </QueryClientProvider>
        </React.StrictMode>,
    );
