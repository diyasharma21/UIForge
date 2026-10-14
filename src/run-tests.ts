import { runSystemVerification } from './engine/verifySystem';

console.log('========================================');
console.log('UIFORGE AUTOMATED SYSTEM VERIFICATION');
console.log('========================================\n');

const report = runSystemVerification();

report.results.forEach((r, i) => {
  const symbol = r.passed ? '✓' : '✗';
  console.log(`${symbol} [${i + 1}/${report.results.length}] ${r.test}`);
  if (r.message) {
    console.log(`   → ${r.message}`);
  }
});

console.log('\n========================================');
if (report.allPassed) {
  console.log('SUCCESS: All 9 system verification checks passed.');
} else {
  console.error('FAILURE: Some checks did not pass.');
  process.exit(1);
}
console.log('========================================');
