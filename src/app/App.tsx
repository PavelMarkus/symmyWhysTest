import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { DatePicker } from 'antd';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DatePicker></DatePicker>
    </QueryClientProvider>
  );
}

export default App;
