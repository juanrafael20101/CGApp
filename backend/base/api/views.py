from django.http import JsonResponse
from ..models import Patients
from .serializers import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET','POST'])
def getRoutes(request):

    if request.method == 'GET':
        patients = Patients.objects.all()
        serializer = PatientSerializer(patients,many=True)
    
    return Response(serializer.data)