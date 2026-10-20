import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Halaman Utama (Daftar Pekerja / Dashboard) */}
      <Stack.Screen 
        name="index" 
        options={{ title: "PekerjaKU - Home" }} 
      />
      {/* Halaman Detail Pekerja / Profile */}
      <Stack.Screen 
        name="detail" 
        options={{ title: "Detail Pekerja" }} 
      />
    </Stack>
  );
}