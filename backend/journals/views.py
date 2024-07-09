from rest_framework import viewsets, permissions
from django.db.models import Count
from django.utils.dateparse import parse_date
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import JournalEntry
from .serializers import JournalEntrySerializer

# CRUD implementation for journals
class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    # def get_queryset(self):
    #     return JournalEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Display a summary of Journals
class JournalEntrySummaryView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        period = request.query_params.get('period', 'daily')
        start_date = request.query_params.get('start_date')
        end_date = request.query_params.get('end_date')

        if start_date:
            start_date = parse_date(start_date)
        if end_date:
            end_date = parse_date(end_date)

        if period == 'daily':
            date_trunc = 'day'
        elif period == 'weekly':
            date_trunc = 'week'
        else:  # default to monthly if not specified or incorrect
            date_trunc = 'month'

        entries = JournalEntry.objects.filter(
            author=request.user,
            created_at__gte=start_date,
            created_at__lte=end_date
        ).extra(select={date_trunc: f"DATE_TRUNC('{date_trunc}', created_at)"}).values(date_trunc).annotate(entry_count=Count('id'))

        return Response(entries)