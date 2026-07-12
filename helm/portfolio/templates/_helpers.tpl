{{/*
Expand the name of the chart.
*/}}
{{- define "portfolio.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{/*
Create a default fully qualified application name.
*/}}
{{- define "portfolio.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name (include "portfolio.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end }}

{{/*
Chart label.
*/}}
{{- define "portfolio.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{/*
Common labels.
*/}}
{{- define "portfolio.labels" -}}
helm.sh/chart: {{ include "portfolio.chart" . }}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Frontend labels.
*/}}
{{- define "portfolio.frontend.labels" -}}
{{ include "portfolio.labels" . }}
app.kubernetes.io/component: frontend
{{- end }}

{{/*
Backend labels.
*/}}
{{- define "portfolio.backend.labels" -}}
{{ include "portfolio.labels" . }}
app.kubernetes.io/component: backend
{{- end }}

{{/*
Reverse Proxy labels.
*/}}
{{- define "portfolio.reverseproxy.labels" -}}
{{ include "portfolio.labels" . }}
app.kubernetes.io/component: reverse-proxy
{{- end }}

{{/*
PostgreSQL labels.
*/}}
{{- define "portfolio.postgres.labels" -}}
{{ include "portfolio.labels" . }}
app.kubernetes.io/component: postgres
{{- end }}

{{/*
Frontend selector labels.
*/}}
{{- define "portfolio.frontend.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/component: frontend
{{- end }}

{{/*
Backend selector labels.
*/}}
{{- define "portfolio.backend.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/component: backend
{{- end }}

{{/*
Reverse Proxy selector labels.
*/}}
{{- define "portfolio.reverseproxy.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/component: reverse-proxy
{{- end }}

{{/*
PostgreSQL selector labels.
*/}}
{{- define "portfolio.postgres.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/component: postgres
{{- end }}
