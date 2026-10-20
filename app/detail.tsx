import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Detail() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Mengambil parameter dinamis yang dikirim dari Home / JobCard
  const title = (params.title as string) || (params.nama as string) || 'Detail Pekerjaan';
  const category = (params.category as string) || (params.kategori as string) || 'PEKERJAAN';
  const description = (params.description as string) || (params.deskripsi as string) || 'Membuat dan menyelesaikan pekerjaan sesuai dengan kebutuhan spesifikasi klien.';
  const location = (params.location as string) || (params.lokasi as string) || 'Online';
  const price = (params.price as string) || (params.salary as string) || (params.harga as string) || 'Rp 100.000';

  // Handler navigasi router Modul 2
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Aplikasi */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>PekerjaKu</Text>
        <Text style={styles.appSubtitle}>Detail Lengkap Pekerjaan</Text>
      </View>

      {/* Kartu Utama (Desain Persis JobCard di Home) */}
      <View style={styles.card}>
        {/* Category Badge Ungu */}
        <View style={styles.badgeRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{category.toUpperCase()}</Text>
          </View>
        </View>

        {/* Title & Description */}
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.jobDescription}>{description}</Text>

        <View style={styles.divider} />

        {/* Footer Card: Lokasi Pin & Harga Biru */}
        <View style={styles.cardFooter}>
          <Text style={styles.locationText}>📍 {location}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>

      {/* Kartu Informasi Tambahan */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Persyaratan & Ketentuan</Text>
        <Text style={styles.infoText}>
          • Pengerjaan dilakukan secara profesional dan tepat waktu.{'\n'}
          • Pembayaran dijamin aman melalui sistem PekerjaKu.{'\n'}
          • Diskusi alur kerja dapat dilakukan setelah konfirmasi pekerjaan.
        </Text>
      </View>

      {/* Group Tombol Navigasi Modul 2 */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleBack}>
          <Text style={styles.btnPrimaryText}>Kembali (router.back)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => router.replace('/')}>
          <Text style={styles.btnSecondaryText}>Reset ke Home (router.replace)</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>© 2026 PekerjaKu</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
  },

  headerContainer: {
    paddingTop: 24,
    paddingBottom: 16,
  },

  appTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1A1A',
  },

  appSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },

  /* Card Persis JobCard Home */
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  badgeRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  categoryBadge: {
    backgroundColor: '#8B5CF6', // Warna ungu khas JobCard
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  categoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  jobTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 6,
  },

  jobDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 14,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationText: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '600',
  },

  priceText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0066FF', // Warna biru harga
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },

  buttonGroup: {
    marginTop: 8,
    gap: 10,
  },

  btnPrimary: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },

  btnPrimaryText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  btnSecondary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },

  btnSecondaryText: {
    color: '#444444',
    fontWeight: '700',
    fontSize: 14,
  },

  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 20,
    marginBottom: 24,
  },
});