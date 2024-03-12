from django.db import models

# Create your models here.

class Patients(models.Model):

    Patient = models.CharField(max_length=200)
    Description = models.CharField(max_length=500)