from rest_framework import serializers
from ..models import Patients

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ['id','Patient','Description']