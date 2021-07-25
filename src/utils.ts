function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString('ID',
        {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"})
  );
}

export {formatDate}
