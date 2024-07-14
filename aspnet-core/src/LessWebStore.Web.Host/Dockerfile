FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/LessWebStore.Web.Host/LessWebStore.Web.Host.csproj", "src/LessWebStore.Web.Host/"]
COPY ["src/LessWebStore.Web.Core/LessWebStore.Web.Core.csproj", "src/LessWebStore.Web.Core/"]
COPY ["src/LessWebStore.Application/LessWebStore.Application.csproj", "src/LessWebStore.Application/"]
COPY ["src/LessWebStore.Core/LessWebStore.Core.csproj", "src/LessWebStore.Core/"]
COPY ["src/LessWebStore.EntityFrameworkCore/LessWebStore.EntityFrameworkCore.csproj", "src/LessWebStore.EntityFrameworkCore/"]
WORKDIR "/src/src/LessWebStore.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/LessWebStore.Web.Host", "src/LessWebStore.Web.Host"]
COPY ["src/LessWebStore.Web.Core", "src/LessWebStore.Web.Core"]
COPY ["src/LessWebStore.Application", "src/LessWebStore.Application"]
COPY ["src/LessWebStore.Core", "src/LessWebStore.Core"]
COPY ["src/LessWebStore.EntityFrameworkCore", "src/LessWebStore.EntityFrameworkCore"]
WORKDIR "/src/src/LessWebStore.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "LessWebStore.Web.Host.dll"]
