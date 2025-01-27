from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JournalEntryViewSet, JournalEntrySummaryView

router = DefaultRouter()
router.register(r'entries', JournalEntryViewSet, basename='journalentry')

urlpatterns = [
    path('', include(router.urls)),
    path('summary/', JournalEntrySummaryView.as_view(), name='journal-summary'),
]
